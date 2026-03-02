FROM nginx:alpine

# Copy all static assets into Nginx's HTML content folder
COPY . /usr/share/nginx/html

# Expose port (Nginx default is 80)
EXPOSE 80

# Start Nginx Server
CMD ["nginx", "-g", "daemon off;"]
