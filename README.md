# 3dzip

This application was built using Angular2 RC3.
Primary purpose of this application is for users to upload a 3D Printer .markerbot file and have the application scan the file to ensure that 3D printer settings are correctly set. 

This application will store the data and results on a Document based DB for owner review and analysis of points of failure.

First Screen - User Information Collection
-Button remains disabled until all fields are completed.
![alt text](https://cloud.githubusercontent.com/assets/12013667/16498135/82b824d6-3eb7-11e6-9c52-ecfe0b1b285b.jpg) 

Second Screen - Upload File
![alt text](https://cloud.githubusercontent.com/assets/12013667/16498278/49911838-3eb8-11e6-92ec-f91db3d99c42.jpg)

Thid Screen - Initial Failure
If a .markerbot fails, the user will be shown
![alt text](https://cloud.githubusercontent.com/assets/12013667/16498131/8143bb24-3eb7-11e6-92f2-594d093d08cb.jpg)

Upon click of the status icons the user will be shown their printer settings
![alt text](https://cloud.githubusercontent.com/assets/12013667/16498130/7ff6755e-3eb7-11e6-81cf-444c528e7342.jpg)

If the Upload was a success the user is shown the same screen with a button to redirect to the upload page.
