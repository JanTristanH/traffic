# Create tables
```
CREATE TABLE routes (
    id INT NOT NULL AUTO_INCREMENT,
    geo_lon DOUBLE,
    geo_lat DOUBLE,
	duration VARCHAR(32),
    distance INT,
    traveltimeLoss INT,
    timestamp TIMESTAMP
)

CREATE TABLE poi (
    identifier VARCHAR(128) NOT NULL,
	display_type VARCHAR(32),
    future BOOLEAN,
    point VARCHAR(32)
)

CREATE TABLE interferences (
    identifier VARCHAR(128) NOT NULL,
	display_type VARCHAR(32),
    future BOOLEAN,
    point VARCHAR(32),
    dx DOUBLE,
    dy DOUBLE,
    info VARCHAR(32), 
)
```