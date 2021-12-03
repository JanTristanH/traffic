# Create tables
```

CREATE TABLE location (
    id INT NOT NULL AUTO_INCREMENT,
    geo_lon DOUBLE,
    geo_lat DOUBLE,
    name VARCHAR(32)
)

CREATE TABLE routes (
    id INT NOT NULL AUTO_INCREMENT,
    geo_lon_from DOUBLE,
    geo_lat_from DOUBLE,
    geo_lon_to DOUBLE,
    geo_lat_to DOUBLE,
	duration VARCHAR(32),
    distance INT,
    traveltimeLoss INT,
    timestamp TIMESTAMP
)


CREATE TABLE poi (
    identifier VARCHAR(128) NOT NULL,
	display_type VARCHAR(32),
    future BOOLEAN,
    geo_lon DOUBLE,
    geo_lat DOUBLE,
    point VARCHAR(32)
)

CREATE TABLE interferences (
    identifier VARCHAR(128) NOT NULL,
	display_type VARCHAR(32),
    future BOOLEAN,
    geo_lon DOUBLE,
    geo_lat DOUBLE,
    info VARCHAR(32), 
)
```