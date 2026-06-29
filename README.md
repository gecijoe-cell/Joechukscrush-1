# Sprinkle Sip Studio

A cute drink showcase website with a polished UI/UX experience and deployment-ready tooling.

## Included assets
- Responsive landing page
- Dockerfile for containerized deployment
- Docker Compose for web, Prometheus, and Grafana
- Terraform example for S3 hosting
- Ansible playbook for deployment

## Run locally
```bash
docker compose up --build
```

Then open:
- http://localhost:8080 for the site
- http://localhost:9090 for Prometheus
- http://localhost:3000 for Grafana
