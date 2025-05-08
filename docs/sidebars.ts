import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'README',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Content',
      items: [
        'Content/README',
        {
          type: 'category',
          label: 'Docker',
          items: [
            'Content/docker/README',
            'Content/docker/intro',
            'Content/docker/basic-commands',
            'Content/docker/dockerfile',
            'Content/docker/docker-compose',
            'Content/docker/AUFS',
            'Content/docker/aufs-explanation',
            'Content/docker/README-DockerFile',
            'Content/docker/README-docker-dive',
            {
              type: 'category',
              label: 'Docker Labs',
              items: [
                'Content/docker/labs/0-1-my-first-container-lab/README',
                'Content/docker/labs/1-1-docker-compose-lab/README',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'Content/kubernetes/README-RunningLocalCluster',
            'Content/kubernetes/README-k8sConfigMap',
            'Content/kubernetes/README-k8sDeployment',
            'Content/kubernetes/README-k8sPDB',
            'Content/kubernetes/README-k8sService',
            {
              type: 'category',
              label: 'Helm',
              items: [
                'Content/kubernetes/helm/helm-basics',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Terraform',
          items: [
            'Content/terraform/terraform',
            'Content/terraform/terraform-remote-state',
            {
              type: 'category',
              label: 'Examples',
              items: [
                'Content/terraform/examples/s3-backend/README',
              ],
            },
            'Content/terraform/terraform-associate-003/labs',
          ],
        },
        {
          type: 'category',
          label: 'AWS',
          items: [
            'Content/aws/introduction',
            'Content/aws/aws',
            'Content/aws/ec2',
            'Content/aws/ec2-components',
            'Content/aws/lambda',
            'Content/aws/s3',
            'Content/aws/s3-components',
            'Content/aws/s3-policy',
            'Content/aws/vpc',
            'Content/aws/vpc-components',
          ],
        },
        {
          type: 'category',
          label: 'Git',
          items: [
            'Content/git/basics',
            'Content/git/behind-the-scenes',
            'Content/git/branches',
            'Content/git/github',
            'Content/git/rebasing',
            'Content/git/tags',
            'Content/git/time-traveling',
          ],
        },
        {
          type: 'category',
          label: 'GitHub Actions',
          items: [
            'Content/github-actions/TOC',
            'Content/github-actions/ci-cd-github-actions',
            {
              type: 'category',
              label: 'Advanced Topics',
              items: [
                'Content/github-actions/advanced-topics/README',
                'Content/github-actions/advanced-topics/containerized-app-cicd',
                'Content/github-actions/advanced-topics/environments-and-approvals',
                'Content/github-actions/advanced-topics/marketplace-and-templates',
                'Content/github-actions/advanced-topics/security-best-practices',
                'Content/github-actions/advanced-topics/third-party-integrations',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Secrets Management',
          items: [
            'Content/secrets_managment/intro-to-secrets',
            'Content/secrets_managment/aws-secrets-manager',
            'Content/secrets_managment/detect-secrets',
            'Content/secrets_managment/github-secrets',
            'Content/secrets_managment/k8s-secrets',
            'Content/secrets_managment/vault-intro',
          ],
        },
      ],
    },
  ],
};

export default sidebars;