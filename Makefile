up:
	docker-compose down 
	docker-compose up -d

logs:
	docker-compose logs -f consumer-logs-me
	
up-and-log:
	docker-compose down 
	docker-compose up -d	
	docker-compose logs -f consumer-logs-me
