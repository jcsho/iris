<template>
    <div class="home">
        <div id="landing" class="tile">
          <div id='stars' />
          <div id='stars2' />
          <div id='stars3' />
          <div class="grid">
            <h1 id="title">Iris</h1>
          </div>
        </div>

        <div id="team" class="tile">
            <div class="grid">
                <div class="heading">
                    <h2>Meet The Team</h2>
                </div>
                <ul class="members">
                    <li>Abe Gupta</li>
                    <li>Ioana Sandor</li>
                    <li>Justin Ho</li>
                    <li>Lucy Huang</li>
                    <li>Sammy Yoo</li>
                </ul>
            </div>
        </div>

        <div id="blog" class="tile">
            <div class="grid">
                <div class="heading">
                    <h2>Follow Our Progress</h2>
                </div>
                <div class="link">
                    <a>View Blog</a>
                </div>
            </div>
        </div>

        <div id="script" class="tile">
            <div class="grid">
                <div class="heading">
                    <h2>What Is Iris About?</h2>
                </div>
            </div>
        </div>

        <div id="concept" class="tile">
            <div class="grid">
                <div class="heading">
                    <h2>See How It All Begins</h2>
                </div>
            </div>
        </div>

        <div id="storyboard" class="tile">
            <div class="grid">
                <div class="heading">
                    <h2>Storyboard</h2>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#title {
  font-family: "League Script", cursive;
  font-size: 10rem;
  color: white;
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 2;
  align-self: center;
  justify-self: center;
}

.tile {
  height: 100vh;
  display: flex;
}

#landing {
  background-image: url("/img/concept/Starry-Sky.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

#team {
  background-color: #7b1fa2;

  .heading {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 2;
    align-self: end;

    h2 {
      color: #f3e5f5;
      font-size: 4em;
      font-family: "Raleway";
      font-weight: 500;
      letter-spacing: 5px;
    }
  }

  .members {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    font-family: "Raleway";
    font-size: 3em;
    list-style-type: none;
    color: #f3e5f5;

    & li {
      margin: 1em 0;
    }
  }
}

#blog {
  background-color: #e0e0e0;

  .heading {
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;

    h2 {
      color: #546e7a;
      font-size: 4em;
      font-weight: 300;
      letter-spacing: 5px;
    }
  }

  .link {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    align-self: center;

    a {
      text-decoration: none;
      color: #546e7a;
      font-size: 2em;

      &:hover {
        text-decoration: underline;
        color: #424242;
      }
    }
  }
}

#script {
  background-image: url("/img/concept/Forest-yellow.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  //background-color: #2E7D32;

  .heading {
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 2;
    align-self: center;
    filter: blur(0px);

    h2 {
      font-size: 4em;
      color: #eeeeee;
      font-weight: 300;
      letter-spacing: 5px;
    }
  }
}

#concept {
  background-color: #ffccbc;

  .heading {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;

    h2 {
      font-size: 3em;
      color: #212121;
      border-bottom: 0.5px solid #212121;
      font-weight: 300;
      letter-spacing: 5px;
    }
  }
}

#storyboard {
  background-color: #546e7a;

  .heading {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 3;

    h2 {
      font-size: 4em;
      color: #fafafa;
      font-weight: 300;
      letter-spacing: 5px;
    }
  }
}
</style>
