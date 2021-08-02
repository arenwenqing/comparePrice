scp -i ~/.ssh/sudaxia_1.pem -r /Users/renwenqing/code/comparePrice/build root@39.96.54.43:/root
ssh -i ~/.ssh/sudaxia_1.pem root@39.96.54.43 "cd ..&&\cp -rf /root/build/* /home/nginx/sudaxia/"
