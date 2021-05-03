FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} covid_app.jar
ENTRYPOINT ["java","-jar","/covid_app.jar"]
