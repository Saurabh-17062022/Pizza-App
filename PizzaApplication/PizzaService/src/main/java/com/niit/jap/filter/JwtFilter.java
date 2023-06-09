package com.niit.jap.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends GenericFilter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String authHeader = request.getHeader("authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer")) {
            throw new ServletException("Missing or Invalid exception");
        }

        // header has 'Authorization', it is not null, has 'Bearer'
        String token = authHeader.substring(7); // removes 'Bearer ' from token value
        Claims claims = Jwts.parser().setSigningKey("newkey").parseClaimsJws(token).getBody();
        System.out.println("\nclaims : " + claims);

        request.setAttribute("claims", claims);
        filterChain.doFilter(request, response);
    }
}
