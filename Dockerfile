FROM nginx:alpine

# Copy all static assets into Nginx's HTML content folder
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY main.js /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY src /usr/share/nginx/html/src

# Expose port (Nginx default is 80)
EXPOSE 80

# Start Nginx Server
CMD ["nginx", "-g", "daemon off;"]
