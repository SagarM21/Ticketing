# Create a Jwt secret in kubernets

- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf (asdf - your jwt signing secret)
