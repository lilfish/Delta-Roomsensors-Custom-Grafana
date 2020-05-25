FROM grafana/grafana as build-stage
COPY public public
EXPOSE 3000:3000
USER grafana
ENTRYPOINT [ "/run.sh" ]
