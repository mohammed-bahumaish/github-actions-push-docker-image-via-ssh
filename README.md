# Build, Push and run Docker image into a remote server via SSH.
This documentation provides instructions on how to use the GitHub Action workflow to build and push a Docker image to a remote server using SSH. By following these steps, you can automate the deployment process and ensure that your Docker containers are up and running on the remote server.

## Prerequisites
Before you begin, make sure you have the following prerequisites in place:

1. Dockerfile: You should have a Dockerfile in your repository that defines the instructions for building your Docker image.
2. docker-compose.yaml: You need a Docker Compose file that specifies the services and configurations for running your Docker containers.
3. Workflow file: Copy the workflow file named deploy.yaml found in the .github/workflows directory of this repository to the corresponding directory in your repository.


## Usage
Follow these steps to deploy your Docker image to a remote server using the provided GitHub Action workflow:

1. Generate an SSH key pair: If you haven't already, generate an SSH key pair on your local machine. You can use the ssh-keygen command to generate the keys. Make sure to keep the private key secure.
2. Add the public key to the remote server: Copy the contents of the public key (usually stored in ~/.ssh/id_rsa.pub) and add it to the ~/.ssh/authorized_keys file on your remote server. This step allows the server to authenticate the connection from the GitHub Actions workflow.
3. Add the private key to GitHub Secrets: In your GitHub repository, go to the repository settings, then click on "Secrets" in the sidebar. Add a new secret with a name like SSH_PRIVATE_KEY, and set the value as the content of the private key file (usually stored in ~/.ssh/id_rsa). Make sure to save the secret.
4. Add additional secrets to GitHub Secrets: In the same "Secrets" settings page, add the following secrets:
      + REMOTE_SERVER_USERNAME: The username used for SSH authentication on the remote server.
      + REMOTE_SERVER_ADDRESS: The IP address or hostname of the remote server.
      + REMOTE_SERVER_PATH: The path on the remote server where you want the Docker Compose file to be stored.
      + Replace the values with the appropriate credentials and server details.
5. Trigger the workflow: Push your changes to the main branch of your repository. The GitHub Action workflow named main will be triggered automatically.
6. Monitor the workflow: Go to the "Actions" tab in your GitHub repository to monitor the progress of the workflow. You can view the build logs and check if any errors occur during the deployment process.
7. Verify the deployment: Once the workflow completes successfully, the Docker image will be built, transferred, and loaded on the remote server. The Docker Compose file will also be transferred to the specified path on the server. The Docker containers will be deployed and running on the remote server based on the configurations specified in the Docker Compose file.

Congratulations! You have successfully deployed your Docker image to a remote server using the provided GitHub Action workflow. Now you can automate your deployment process and ensure consistent and reliable deployments of your Docker containers.
