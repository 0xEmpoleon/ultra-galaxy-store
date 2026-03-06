FROM nginx:alpine

# Copy static assets into nginx server directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx quietly
CMD ["nginx", "-g", "daemon off;"]
