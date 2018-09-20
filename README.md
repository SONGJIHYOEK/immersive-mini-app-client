# The Technical Assessment

이 평가는 Immersive course 의 전반부 동안 배웠던 skills 과 technologies 를 사용하여 full stack JavaScript application 을 구축하는 solo 스프린트와 같습니다. 익숙한 개념과 기법들을 강화하고 새로운 내용도 배우기를 기대하세요.

## Before Starting

1. 어떠한 형태의 커뮤니케이션 도구들도 허용되지 않습니다. (e.g. 휴대폰, 슬랙, 메신저 등) / 단, 코드스테이츠 스태프에게 연락하길 원하시는 경우 제외
2. 이 repo 를 clone 하세요. 시험시간동안 절대 여러분들의 작업물을 push 하지마세요.
3. Zoom 으로 화면 녹화를 시작하세요. [Zoom 녹화 가이드](https://docs.google.com/presentation/d/e/2PACX-1vShf4PEGg-bg3jtDFs81e_bf4P9GnNt8Tza_tRagr72yHuZ9GgweJxIsCpgK6waRcozLhKBTsm8WTeu/pub?start=false&loop=false&delayms=3000) 를 참고하세요.

## Guidelines

이 평가를 완료하려면 시간을 효과적으로 관리해야 합니다. 의미있는 커밋 메세지로 커밋을 자주 하세요.

여러분 개인 GitHub public repository 에서 new repository 를 만들고 아래와 같은 형태로 만들어 주세요 반드시 **public** repository 여야 합니다.

- client: `immersive-mini-app-client`
- server: `immersive-mini-app-server`

## Available resources

이 평가의 궁극적인 목표는 엔지니로서의 능력을 입증할 수 있는 기회를 제공하는 것입니다. 정확하게 코드스테이츠에서 여러분들의 상황을 판단하기 위해, 지정된 자료만 참고하시기 바랍니다.

* MDN, W3School, nodejs.org, express, react, create-react-app, mongodb, mongoose, 등과 같은 공식 문서 resource를 사용합니다.
* stackoverflow를 사용하는 경우 특정 문제에 대한 해결 방안만 참고합니다. (즉, 전체적으로 만들어진 코드 들을 절대로 가져다 쓰지 않으며 참고도 하지 않습니다.)
* google 검색은 허용되지만 blog 검색 결과는 사용하지 않습니다.
* create-react-app, express-generator 외에 다른 boilerplate 는 사용할 수 없습니다.
* Code States 에서 여러분들 스스로 또는 다른 학생들과 함께 또는 스태프들이 작성한 자료들을 참고할 수 없습니다. (런코)
	* e.g. 강의, 스프린트, 과거 평가, 메모, 과제 등
  * 이전에 연습한 코드
* 사용 가능한 온라인 자료들에서 바로 복사 붙여넣기를 할 수 없습니다.

## Database
* server 작업 시, 아래의 cloud mlab mongoDB 를 사용하시면 됩니다. (read only)
`mongodb://student:JNytCZanZaDEcTxMZyM2wsaF@ds161312.mlab.com:61312/codesplash`
위 data에는 `images` 라는 collection에 `db.json` 데이터가 들어 있습니다.

* server에서 databse 통해 받아오는 photo list를 보면 id 값이 있습니다. 그 id값을 이용해서 `https://picsum.photos/200/300?image=fetched_id` 의 `picsum api`를 활용하여 그림을 그리시면 됩니다.

## Submitting Your Work

여러분들은 18:00 시에 감독관의 지시에 따라 결과물(개인 client, server repository link)을 제출합니다. 18:00 시에 general 채널에서 공유해 주시기 바랍니다. (다만, 일찍 끝내고 떠나시는 분은 마지막 commit을 감독관에게 DM으로 보내시면 됩니다. 일찍 떠나신 이후에 추가로 commit 된 코드는 인정되지 않습니다. cheating으로 처리되거나 강의장 떠나신 시점에서 가장 최근 commit으로 평가될 수 있습니다)

1. 마지막 commit 을 작성하세요.
2. Zoom 화면 녹화를 멈추시고 파일 이름을 `본인이름-날짜`(e.g. 홍길동-20170125) 로 저장해주세요.
3. `README.md` 의 "How to start this app" 매뉴얼을 만들어 주세요.
4. Zoom 으로 녹화한 파일은 구글드라이브 본인 이름의 폴더에 업로드해주세요.
5. client, server GitHub repo link를 general 혹은 (일찍 떠나시는 경우) 감독관에게 slack DM으로 보내주세요.
