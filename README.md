<!-- Improved compatibility of back to top link: See: https://github.com/josephHelfenbein/hackknight2025/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<a href="https://github.com/josephHelfenbein/hackknight2025">

  </a><h3>CUNY One Fraud Agent (COFA)</h3>

  <p align="center">
    AI fraud detection with real-time alerts and voice agent actions
    <br />
    <a href="https://hackknight2025.vercel.app/">Visit</a>
    ·
    <a href="https://github.com/josephHelfenbein/hackknight2025/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/josephHelfenbein/hackknight2025/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#get-started">Get Started</a>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

COFA (CUNY One Fraud Agent) is an AI-powered fraud detection and response system designed to help users monitor credit card transactions in real-time. It leverages FastAPI, Supabase, and Retell AI to detect suspicious activity, notify users, and facilitate immediate action.

### How It Works:

Transaction Processing
* Users have their credit card transactions processed through a machine learning model hosted on FastAPI.
Fraud Detection
* If a transaction is not suspicious, it's added to Supabase, and the frontend updates in real-time.
* If a transaction is suspicious, it is flagged in Supabase, and the frontend displays it as suspicious.
AI Phone Call Notification
* A Retell AI agent calls the user to notify them of the suspicious transaction.
* Users can ask for details, and the agent fetches flagged transactions from Supabase.
User Response Options (via AI Call or Frontend)
* Approve Transactions → Removes the suspicious flags.
* Report Fraud & Freeze Card → The frontend updates in real-time, marking the card as frozen.
* Talk to a Live Representative → The AI agent calls the developer’s phone for further assistance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Next.js][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Retell][Retell]][Retell-url]
* [![Twilio][Twilio]][Twilio-url]
* [![Supabase][Supabase]][Supabase-url]
* [![FastAPI][FastAPI]][FastAPI-url]

Programmed in
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Python][Python]][Python-url]
  
Powered by
* [![Vercel][Vercel]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Get started

Here are the steps to run the project locally if you want to develop your own project.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Run Project

You can run the frontend using 
```sh
npm run server
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/josephHelfenbein/hackknight2025](https://github.com/josephHelfenbein/hackknight2025)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project was submitted to the HackKnight 2025 hackathon for the Financial track.

Devpost link: [https://devpost.com/software/cofa](https://devpost.com/software/cofa)

* [Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/josephHelfenbein/hackknight2025.svg?style=for-the-badge
[contributors-url]: https://github.com/josephHelfenbein/hackknight2025/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/josephHelfenbein/hackknight2025.svg?style=for-the-badge
[forks-url]: https://github.com/josephHelfenbein/hackknight2025/network/members
[stars-shield]: https://img.shields.io/github/stars/josephHelfenbein/hackknight2025.svg?style=for-the-badge
[stars-url]: https://github.com/josephHelfenbein/hackknight2025/stargazers
[issues-shield]: https://img.shields.io/github/issues/josephHelfenbein/hackknight2025.svg?style=for-the-badge
[issues-url]: https://github.com/josephHelfenbein/hackknight2025/issues
[license-shield]: https://img.shields.io/github/license/josephHelfenbein/hackknight2025.svg?style=for-the-badge
[license-url]: https://github.com/josephHelfenbein/hackknight2025/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://github.com/josephHelfenbein/hackknight2025/blob/main/product-screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Expo]: https://img.shields.io/badge/expo-000000?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[Flask]: https://img.shields.io/badge/flask-4590A1?logo=flask&style=for-the-badge&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[JavaScript]: https://img.shields.io/badge/javascript-yellow?logo=javascript&style=for-the-badge&logoColor=white
[JavaScript-url]: https://developer.oracle.com/languages/javascript.html
[ThreeJS]: https://img.shields.io/badge/three.js-black?logo=three.js&style=for-the-badge&logoColor=white
[ThreeJS-url]: https://threejs.org/
[TypeScript]: https://img.shields.io/badge/typescript-3178C6?logo=typescript&style=for-the-badge&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Python]: https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[Amazon-RDS]: https://img.shields.io/badge/amazon%20rds-527FFF?style=for-the-badge&logo=amazon%20rds&logoColor=white
[Amazon-RDS-url]: https://aws.amazon.com/rds/
[Cloudflare]: https://img.shields.io/badge/cloudflare%20workers-F38020?style=for-the-badge&logo=cloudflare%20workers&logoColor=white
[Cloudflare-url]: https://workers.cloudflare.com/
[Vercel]: https://img.shields.io/badge/vercel-000000?logo=vercel&style=for-the-badge&logoColor=white
[Vercel-url]: https://www.vercel.com/
[Supabase]: https://img.shields.io/badge/supabase-3FCF8E?logo=supabase&style=for-the-badge&logoColor=white
[Supabase-url]: https://supabase.com/
[Clerk]: https://img.shields.io/badge/clerk-6C47FF?logo=clerk&style=for-the-badge&logoColor=white
[Clerk-url]: https://clerk.com/
[Onchainkit]: https://img.shields.io/badge/Onchainkit-0052FF.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxjaXJjbGUgY3g9IjUxMiIgY3k9IjUxMiIgcj0iNTEyIiBzdHlsZT0iZmlsbDojMDA1MmZmIi8+CiAgIDxwYXRoIGQ9Ik01MTYuMyAzNjEuODNjNjAuMjggMCAxMDguMSAzNy4xOCAxMjYuMjYgOTIuNDdINzY0Qzc0MiAzMzYuMDkgNjQ0LjQ3IDI1NiA1MTcuMjcgMjU2IDM3Mi44MiAyNTYgMjYwIDM2NS42NSAyNjAgNTEyLjQ5UzM3MCA3NjggNTE3LjI3IDc2OGMxMjQuMzUgMCAyMjMuODItODAuMDkgMjQ1Ljg0LTE5OS4yOEg2NDIuNTVjLTE3LjIyIDU1LjMtNjUgOTMuNDUtMTI1LjMyIDkzLjQ1LTgzLjIzIDAtMTQxLjU2LTYzLjg5LTE0MS41Ni0xNDkuNjguMDQtODYuNzcgNTcuNDMtMTUwLjY2IDE0MC42My0xNTAuNjZ6IiBzdHlsZT0iZmlsbDojZmZmIi8+Cjwvc3ZnPg==&style=for-the-badge
[Onchainkit-url]: https://onchainkit.xyz/
[Llamaindex-url]: https://www.llamaindex.ai/
[Llamaindex]: https://img.shields.io/badge/llamaindex-FF3621?logo=databricks&style=for-the-badge&logoColor=white
[Lancedb-url]: https://lancedb.com/
[Lancedb]: https://img.shields.io/badge/lancedb-FF3621?logo=databricks&style=for-the-badge&logoColor=white
[Tailwind]: https://img.shields.io/badge/tailwind%20css-06B6D4?logo=tailwindcss&style=for-the-badge&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Retell]: https://img.shields.io/badge/retell-000000.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iNzY4IiBoZWlnaHQ9Ijc2OCIgdmlld0JveD0iOTAgOTAgNjE4IDYxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijc2OCIgaGVpZ2h0PSI3NjgiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE5LjEzMiAyMjEuODM4QzM0MC42MjYgMjIxLjgzOCAzNTguMDUxIDIwNC40MTMgMzU4LjA1MSAxODIuOTE5QzM1OC4wNTEgMTYxLjQyNSAzNDAuNjI2IDE0NCAzMTkuMTMyIDE0NEMyOTcuNjM3IDE0NCAyODAuMjEzIDE2MS40MjUgMjgwLjIxMyAxODIuOTE5QzI4MC4yMTMgMjA0LjQxMyAyOTcuNjM3IDIyMS44MzggMzE5LjEzMiAyMjEuODM4Wk00NzguNjMgMzg0QzUwMy4xNzQgMzcyLjcxOSA1MjAuMjE2IDM0Ny45MTcgNTIwLjIxNiAzMTkuMTM1QzUyMC4yMTYgMjc5LjcyOSA0ODguMjcxIDI0Ny43ODMgNDQ4Ljg2NSAyNDcuNzgzQzQyMC4wODUgMjQ3Ljc4MyAzOTUuMjg0IDI2NC44MjMgMzg0LjAwMiAyODkuMzY1QzM3Mi43MiAyNjQuODIzIDM0Ny45MTkgMjQ3Ljc4MyAzMTkuMTM4IDI0Ny43ODNDMjc5LjczMiAyNDcuNzgzIDI0Ny43ODcgMjc5LjcyOSAyNDcuNzg3IDMxOS4xMzVDMjQ3Ljc4NyAzNDcuOTE3IDI2NC44MyAzNzIuNzE5IDI4OS4zNzQgMzg0QzI2NC44MyAzOTUuMjgyIDI0Ny43ODcgNDIwLjA4NCAyNDcuNzg3IDQ0OC44NjZDMjQ3Ljc4NyA0ODguMjcyIDI3OS43MzIgNTIwLjIxNyAzMTkuMTM4IDUyMC4yMTdDMzQ3LjkxOSA1MjAuMjE3IDM3Mi43MiA1MDMuMTc3IDM4NC4wMDIgNDc4LjYzNkMzOTUuMjg0IDUwMy4xNzcgNDIwLjA4NSA1MjAuMjE3IDQ0OC44NjUgNTIwLjIxN0M0ODguMjcxIDUyMC4yMTcgNTIwLjIxNiA0ODguMjcyIDUyMC4yMTYgNDQ4Ljg2NkM1MjAuMjE2IDQyMC4wODQgNTAzLjE3NCAzOTUuMjgyIDQ3OC42MyAzODRaTTM4NC4wMDIgNDE5LjA5NkMzOTEuMTE5IDQwMy42MTQgNDAzLjYxNyAzOTEuMTE3IDQxOS4xIDM4NEM0MDMuNjE3IDM3Ni44ODQgMzkxLjExOSAzNjQuMzg3IDM4NC4wMDIgMzQ4LjkwNUMzNzYuODg0IDM2NC4zODcgMzY0LjM4NiAzNzYuODg0IDM0OC45MDMgMzg0QzM2NC4zODYgMzkxLjExNyAzNzYuODg0IDQwMy42MTQgMzg0LjAwMiA0MTkuMDk2Wk00NzQuODEzIDE4Mi45MTlDNDc0LjgxMyAxOTcuMjQ4IDQ2My4xOTYgMjA4Ljg2NSA0NDguODY3IDIwOC44NjVDNDM0LjUzNyAyMDguODY1IDQyMi45MjEgMTk3LjI0OCA0MjIuOTIxIDE4Mi45MTlDNDIyLjkyMSAxNjguNTg5IDQzNC41MzcgMTU2Ljk3MyA0NDguODY3IDE1Ni45NzNDNDYzLjE5NiAxNTYuOTczIDQ3NC44MTMgMTY4LjU4OSA0NzQuODEzIDE4Mi45MTlaTTE4Mi45MTYgMzQ1LjA4MUMxOTcuMjQ1IDM0NS4wODEgMjA4Ljg2MiAzMzMuNDY1IDIwOC44NjIgMzE5LjEzNUMyMDguODYyIDMwNC44MDYgMTk3LjI0NSAyOTMuMTg5IDE4Mi45MTYgMjkzLjE4OUMxNjguNTg2IDI5My4xODkgMTU2Ljk3IDMwNC44MDYgMTU2Ljk3IDMxOS4xMzVDMTU2Ljk3IDMzMy40NjUgMTY4LjU4NiAzNDUuMDgxIDE4Mi45MTYgMzQ1LjA4MVpNMzQ1LjA4NiA1ODUuMDhDMzQ1LjA4NiA1OTkuNDEgMzMzLjQ3IDYxMS4wMjYgMzE5LjE0IDYxMS4wMjZDMzA0LjgxMSA2MTEuMDI2IDI5My4xOTQgNTk5LjQxIDI5My4xOTQgNTg1LjA4QzI5My4xOTQgNTcwLjc1MSAzMDQuODExIDU1OS4xMzUgMzE5LjE0IDU1OS4xMzVDMzMzLjQ3IDU1OS4xMzUgMzQ1LjA4NiA1NzAuNzUxIDM0NS4wODYgNTg1LjA4Wk01ODUuMDggNDc0LjgxQzU5OS40MDkgNDc0LjgxIDYxMS4wMjYgNDYzLjE5MyA2MTEuMDI2IDQ0OC44NjRDNjExLjAyNiA0MzQuNTM0IDU5OS40MDkgNDIyLjkxOCA1ODUuMDggNDIyLjkxOEM1NzAuNzUgNDIyLjkxOCA1NTkuMTM0IDQzNC41MzQgNTU5LjEzNCA0NDguODY0QzU1OS4xMzQgNDYzLjE5MyA1NzAuNzUgNDc0LjgxIDU4NS4wOCA0NzQuODFaTTIwMi4zODEgMTgyLjkyQzIwMi4zODEgMTkzLjY2NyAxOTMuNjY5IDIwMi4zNzkgMTgyLjkyMSAyMDIuMzc5QzE3Mi4xNzQgMjAyLjM3OSAxNjMuNDYyIDE5My42NjcgMTYzLjQ2MiAxODIuOTJDMTYzLjQ2MiAxNzIuMTcyIDE3Mi4xNzQgMTYzLjQ2IDE4Mi45MjEgMTYzLjQ2QzE5My42NjkgMTYzLjQ2IDIwMi4zODEgMTcyLjE3MiAyMDIuMzgxIDE4Mi45MlpNMTgyLjkyMSA2MDQuNTQxQzE5My42NjkgNjA0LjU0MSAyMDIuMzgxIDU5NS44MjkgMjAyLjM4MSA1ODUuMDgxQzIwMi4zODEgNTc0LjMzNCAxOTMuNjY5IDU2NS42MjIgMTgyLjkyMSA1NjUuNjIyQzE3Mi4xNzQgNTY1LjYyMiAxNjMuNDYyIDU3NC4zMzQgMTYzLjQ2MiA1ODUuMDgxQzE2My40NjIgNTk1LjgyOSAxNzIuMTc0IDYwNC41NDEgMTgyLjkyMSA2MDQuNTQxWk02MDQuNTQyIDU4NS4wODFDNjA0LjU0MiA1OTUuODI5IDU5NS44MyA2MDQuNTQxIDU4NS4wODMgNjA0LjU0MUM1NzQuMzM1IDYwNC41NDEgNTY1LjYyMyA1OTUuODI5IDU2NS42MjMgNTg1LjA4MUM1NjUuNjIzIDU3NC4zMzQgNTc0LjMzNSA1NjUuNjIyIDU4NS4wODMgNTY1LjYyMkM1OTUuODMgNTY1LjYyMiA2MDQuNTQyIDU3NC4zMzQgNjA0LjU0MiA1ODUuMDgxWk01ODUuMDgzIDIwMi4zNzlDNTk1LjgzIDIwMi4zNzkgNjA0LjU0MiAxOTMuNjY3IDYwNC41NDIgMTgyLjkyQzYwNC41NDIgMTcyLjE3MiA1OTUuODMgMTYzLjQ2IDU4NS4wODMgMTYzLjQ2QzU3NC4zMzUgMTYzLjQ2IDU2NS42MjMgMTcyLjE3MiA1NjUuNjIzIDE4Mi45MkM1NjUuNjIzIDE5My42NjcgNTc0LjMzNSAyMDIuMzc5IDU4NS4wODMgMjAyLjM3OVpNNDg3Ljc4MyA1ODUuMDgxQzQ4Ny43ODMgNjA2LjU3NSA0NzAuMzU5IDYyNCA0NDguODY0IDYyNEM0MjcuMzcgNjI0IDQwOS45NDUgNjA2LjU3NSA0MDkuOTQ1IDU4NS4wODFDNDA5Ljk0NSA1NjMuNTg2IDQyNy4zNyA1NDYuMTYyIDQ0OC44NjQgNTQ2LjE2MkM0NzAuMzU5IDU0Ni4xNjIgNDg3Ljc4MyA1NjMuNTg2IDQ4Ny43ODMgNTg1LjA4MVpNNTg1LjA4MyAzNTguMDU0QzYwNi41NzcgMzU4LjA1NCA2MjQuMDAyIDM0MC42MyA2MjQuMDAyIDMxOS4xMzVDNjI0LjAwMiAyOTcuNjQxIDYwNi41NzcgMjgwLjIxNyA1ODUuMDgzIDI4MC4yMTdDNTYzLjU4OSAyODAuMjE3IDU0Ni4xNjQgMjk3LjY0MSA1NDYuMTY0IDMxOS4xMzVDNTQ2LjE2NCAzNDAuNjMgNTYzLjU4OSAzNTguMDU0IDU4NS4wODMgMzU4LjA1NFpNMjIxLjgzOCA0NDguODY2QzIyMS44MzggNDcwLjM2MSAyMDQuNDEzIDQ4Ny43ODUgMTgyLjkxOSA0ODcuNzg1QzE2MS40MjUgNDg3Ljc4NSAxNDQgNDcwLjM2MSAxNDQgNDQ4Ljg2NkMxNDQgNDI3LjM3MiAxNjEuNDI1IDQwOS45NDggMTgyLjkxOSA0MDkuOTQ4QzIwNC40MTMgNDA5Ljk0OCAyMjEuODM4IDQyNy4zNzIgMjIxLjgzOCA0NDguODY2WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+&style=for-the-badge
[Retell-url]: https://www.retellai.com/
[FastAPI]: https://img.shields.io/badge/fastapi-009688?logo=fastapi&style=for-the-badge&logoColor=white
[FastAPI-url]: https://fastapi.tiangolo.com/
[Gemini]: https://img.shields.io/badge/gemini-8E75B2?logo=google%20gem=ni&style=for-the-badge&logoColor=white
[Gemini-url]: https://gemini.google.com
[OpenCV]: https://img.shields.io/badge/opencv-5C3EE8?logo=opencv&style=for-the-badge&logoColor=white
[OpenCV-url]: https://opencv.org/
[MediaPipe]: https://img.shields.io/badge/mediapipe-0097A7?logo=mediapipe&style=for-the-badge&logoColor=white
[MediaPipe-url]: https://ai.google.dev/edge/mediapipe/solutions/guide
[Supabase]: https://img.shiebase.com/
[Twilio]: https://img.shields.io/badge/twilio-F22F46?logo=twilio&style=for-the-badge&logoColor=white
[Twilio-url]: https://www.twilio.com/en-us
