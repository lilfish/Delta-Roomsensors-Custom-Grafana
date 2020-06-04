FROM grafana/grafana as build-stage
COPY public public
COPY conf conf
COPY pkg/api/index.go pkg/api/index.go
EXPOSE 3000:3000
USER grafana
ENTRYPOINT [ "/run.sh" ]
