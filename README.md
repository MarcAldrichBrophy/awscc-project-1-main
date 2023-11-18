This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

# Extracta
Extracta is an AI file tagging system, which allows users to query their data based on the content, not their file names.

Extracta was a 3 week project for the Association of Computer Machinery (ACM) project competition. The team consisted of 8 engineers and 1 project lead. Credits listed at the bottom of this document.

## Image Analysis
Uploading an image using Extracta utilizes AWS Rekognition, extracting objects from the image, and appending those objects as tags to the image. The image is then uploaded to an S3 data lake. 

## Document Analysis 
Uploading a PDF, or a photo of a document automatically extracts all text with AWS Textract, then runs AI analysis with AWS Comprehend. Comprehend takes the language, sentiment, and key topics from the document. These are then appended to the file as tags and uploaded to an S3 data lake. 

## Audio Analysis 
Uploading an mp3 or wav file generates a transcription, uploading both the audio file and transcription to the S3 data lake. Comprehend is additionally run on the transcription to extract key phrases and append them to the transcription file. 

# Search Queries 
Although not yet implemented, with these appended tags, users can run queries that match these appended tags. Tagging all files becomes an AI process instead of a tedious manual process. 


## Installation 
Ensure that git and node are downloaded. 
After running git clone, install packages. 
```
npm install
```

Then run the development server. 

``` 
npm run dev 
``` 

Open [http://localhost:3000](http://localhost:3000) or run on desired server.

### Important Notes 

The API endpoints on this project are no longer active, however repositories for all lambda functions are listed here:<br>

S3 Dashboard Integration: https://github.com/MarcAldrichBrophy/extracta-lambda-s3<br>
Transcribe: https://github.com/MarcAldrichBrophy/extracta-lambda-transcribe<br>
Rekognition: https://github.com/MarcAldrichBrophy/extracta-lambda-rekognition<br>
Comprehend: https://github.com/MarcAldrichBrophy/extracta-lambda-comprehend

# Credits

Caleb Swan: https://github.com/calebuki<br>
Ninn Sieng: https://github.com/Sothaninn<br>
Rohit Nagotkar: https://github.com/rxhxt<br>
Carter Martin: https://github.com/Carter-Martin<br>
Vaishnavi Punati: https://github.com/punativaishnavi<br>
June Wu: https://github.com/Taslosis<br>
Supraj Reddy: https://github.com/supraj-reddy<br>
Gayatri Padma Kunaparaju: https://github.com/gayatri891