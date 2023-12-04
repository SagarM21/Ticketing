# Create a Jwt secret in kubernets

- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf (asdf - your jwt signing secret)

# Command used to create a image

docker build -t sagarm21(Your docker id)/client(folder name) . (dot specifies current directory)

- then push to kubernetes
  docker push sagarm21/client (Be in the client directory)
