# Create a drawing board

## canvasAPI를 이용한 가벼운 그림판을 구현했습니다.

### screen

<img src="https://user-images.githubusercontent.com/59306143/103662936-dcf95480-4fb3-11eb-9135-80c0835e59a5.gif" alt="ezgif com-gif-maker" width="600" height="400"/>

<img src="https://user-images.githubusercontent.com/59306143/103665979-64949280-4fb7-11eb-851c-419d9a33c9f2.gif
" width="600" height="400"/>

### explanation

- html5 canvasAPI 를 이용했습니다.

- mouse events 로 구성되어 있습니다.

- 우클릭으로 contextmenu가 실행될 때, preventDefault() 를 통해 우클릭화면이 뜨지 않게 했습니다.

- 따로 저장버튼을 만들어 toDataURL() 로 저장되게 했습니다.
