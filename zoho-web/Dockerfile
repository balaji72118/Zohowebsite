# Step 1: Build Spring Boot app
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY Zoho-Web/zoho-web/ .   # copy only the backend folder
RUN mvn clean package -DskipTests

# Step 2: Run Spring Boot jar
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
