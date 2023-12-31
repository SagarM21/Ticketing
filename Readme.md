<h1 align="center" style="font-size: 5rem;">
MicroServices Project
</h1>

## Run the application

```bash
# Run the below command in main directory of project
skaffold dev
```

## Some Common Commands used in project

Create a Jwt secret in kubernetes:

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf (asdf - your jwt signing secret)
```

Command used to create a image:

```bash
docker build -t DOCKER_USERNAME/FOLDER_NAME . (dot specifies current directory)

Example:
docker build -t DOCKER_USERNAME/client .

# Push it to kubernetes - Run the command in the respective Folder
docker push DOCKER_USERNAME/FOLDER_NAME
```

Kubectl commands

```bash
# Get all the running pods
kubectl get pods

# Delete respective pod
kubectl delete pod POD_NAME

# Port Forwarding command
kubectl port-forward POD_NAME 4222:4222 (LocalMachinePort: kube)
```

Publish pkg on npm

```bash
# --access public is used when you are using free account on npm
npm publish --access public

# To re-publish the common package
cd common
npm run pub
```

### Link to the common package:

<div align="center">
<span style="margin-bottom: 20px;">GitHub: <a href="https://github.com/SagarM21/sagarm21tickets-common">Common-Ticketing-Package</a>
</span>

<span>NPM: <a href="https://www.npmjs.com/package/@sagarm21tickets/common">
NPM Link </a> </span>

</div>

### Demo Video

https://github.com/SagarM21/Ticketing/assets/72984307/c08613cc-955c-42ae-b7c8-3375c3bca730

<p>
<span style="color: red;">Note: </span>
<em>Focus of the project was not to build great frontend but learn microservices</em>
</p>
