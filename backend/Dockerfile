# Projenin kullandığı Java sürümüne göre 17 veya 21 yapabilirsin
FROM eclipse-temurin:17-jdk-alpine

# Konteyner içinde çalışacağımız dizini belirliyoruz
WORKDIR /app

# Derlenmiş jar dosyasını konteynerin içine kopyalıyoruz
# (Maven kullanıyorsan genellikle target/ altında olur)
COPY target/*.jar app.jar

# Uygulamanın dışarı açılacağı port (Spring Boot varsayılanı 8080'dir)
EXPOSE 8080

# Konteyner başladığında uygulamayı çalıştıracak komut
ENTRYPOINT ["java", "-jar", "app.jar"]