# node 10.15.3 버전을 사용하겠다는 의미
FROM    node:10.15.3

# 해당 이미지를 만든 사용자의 정보
MAINTAINER shpimit <shpimit@nate.com>

# 도커 컨테이너 호스트와 공유할 디렉터리 지정
VOLUME /deploy

# 도커 이미지를 실행할시 실행될 스크립트
COPY ./start-server.sh /usr/local/bin
RUN ln -s /usr/local/bin/start-server.sh /start-server.sh
RUN chmod +x /start-server.sh
CMD ["start-server.sh"]
