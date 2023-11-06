# Set the base image to use
FROM gcc:latest
# Copy the C program into the container
COPY exercise2.c .
# Compile the C program
RUN gcc -o exercise2 exercise2.c
# Set the command to run when the container starts
CMD ["./exercise2"]