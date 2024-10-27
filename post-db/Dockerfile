# Use the official PostgreSQL image from the Docker Hub
FROM postgres:17-alpine

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Copy any SQL scripts or initial data into the Docker image
# These scripts will run on container startup
COPY ./schema/init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432/tcp

# Command to run the PostgreSQL server
#CMD ["postgres"]
