### GetMentor is a web app that makes it easy to find local/remote mentor for different courses
#### it is developed using React with Redux in the Front-end and Express with Mongoose and MongoDB in the Backend

#### before you run the app locally you will need to get AWS credentials

##### .env file should look like
    JWT_SECRET='<your_secret_key>'
    AWS_BUCKET='<AWS_bucket_name>'
    AWS_URL_BASE='https://s3-us-west-1.amazonaws.com/'
    AWS_ACCESS_KEY_ID='<your aws access key>'
    AWS_SECRET_ACCESS_KEY='<your aws secret access key>'

### To run the app on your local Machine
---
    git clone https://github.com/tsinat/getTutor
    cd getTutor
    touch .env                 // add your credentials to .env files
    npm install
    npm start
