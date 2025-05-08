import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'README', // This will use the main README.md from the repository
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Labs',
      link: {
        type: 'generated-index',
        title: 'DevOps Labs',
        description: 'Learn DevOps through hands-on labs',
      },
      items: [
        'Labs/00-Setup/README',
        {
          type: 'category',
          label: 'Docker',
          items: [
            'Labs/01-Docker/README',
            'Labs/01-Docker/01.01-DockerCommands/README',
            'Labs/01-Docker/01.02-BuildDockerImage/README',
            'Labs/01-Docker/01.03-DockerRegistry/README',
            'Labs/01-Docker/01.04-DockerCompose/README',
          ],
        },
        {
          type: 'category',
          label: 'Kubernetes',
          items: [
            'Labs/02-K8S/README',
            'Labs/02-K8S/02.01-K8S-Setup/README',
            'Labs/02-K8S/02.02-K8S-Dashboard/README',
            'Labs/02-K8S/02.03-K8S-Deployment/README',
            'Labs/02-K8S/02.04-K8S-Service/README',
            'Labs/02-K8S/02.05-K8S-Resources/README',
            'Labs/02-K8S/02.06-K8S-Variables/README',
            'Labs/02-K8S/02.07-K8S-Secrets/README',
          ],
        },
        {
          type: 'category',
          label: 'Helm',
          items: [
            'Labs/03-Helm/README',
            'Labs/03-Helm/03.01-HelmIntro/README',
            'Labs/03-Helm/03.02-HelmTemplates/README',
          ],
        },
        {
          type: 'category',
          label: 'ArgoCD',
          items: [
            'Labs/04-ArgoCD/README',
          ],
        },
        {
          type: 'category',
          label: 'Terraform',
          items: [
            'Labs/05-Terraform/README',
            'Labs/05-Terraform/05.01-TerraformIntro/README',
          ],
        },
      ],
    },
  ],
};

export default sidebars;