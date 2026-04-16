FROM jenkins/jenkins:lts
# Root kullanıcısına geçip Docker'ı kuruyoruz
USER root

RUN apt-get update && \
    apt-get install -y docker.io && \
    usermod -aG docker jenkins

# Güvenlik için tekrar jenkins kullanıcısına dönüyoruz
USER jenkins