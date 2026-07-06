# Difference between JPA, Hibernate, and Spring Data JPA

## Java Persistence API (JPA)
- **What it is:** JSR 338 Specification for persisting, reading, and managing data from Java objects.
- **Key Point:** It is just a specification (a set of interfaces and rules). It does **not** contain a concrete implementation.

## Hibernate
- **What it is:** An ORM (Object-Relational Mapping) tool.
- **Key Point:** It is one of the most popular concrete implementations of the JPA specification. It does the heavy lifting of mapping Java objects to database tables.

## Spring Data JPA
- **What it is:** Another level of abstraction provided by the Spring Framework over JPA implementation providers like Hibernate.
- **Key Point:** It does not implement JPA itself but heavily reduces boilerplate code (like opening sessions or managing transactions manually). You simply write interfaces (e.g., `extends JpaRepository`), and Spring handles the rest automatically.
