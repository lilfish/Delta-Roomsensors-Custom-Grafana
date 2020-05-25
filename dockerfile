FROM grafana/grafana as build-stage
COPY public public
EXPOSE 3000
USER grafana
RUN ls public/fonts
ENTRYPOINT [ "/run.sh" ]
RUN ls public/fonts
