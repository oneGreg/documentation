echo ""
echo "using docker ..."
echo "open phpmyadmin at localhost:8000"
echo "open example app at localhost:8001"
echo "to run mysql client:   docker-compose exec db mysql -u root -p"
echo "to stop execute:   docker-compose stop"

docker-compose up -d
docker-compose ps


echo "to stop execute:   docker-compose stop"
