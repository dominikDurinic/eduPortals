import { Tutorial } from "../modules/Tutorial";

function VideoGuide(props: { data: Tutorial[] | undefined; ind: number }) {
  const index = props.ind - 1;

  //{props.data && props.data[index].video}

  return (
    <div className="video-guide-div">
      {props.data && props.data[index].video !== "" && (
        <>
          <div className="video-div">
            <iframe
              className="video-frame"
              src={props.data && props.data[index].video}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              title="test-edu"
            ></iframe>
          </div>

          <script src="https://player.vimeo.com/api/player.js"></script>

          {/*<iframe
            className="video-div"
            src="https://www.youtube.com/embed/o4k21iUeVuI?si=jQmFoa7D6Dz2v59L"
            allowFullScreen
          ></iframe>*/}
          <p>Upute:</p>
        </>
      )}

      <p>{props.data && props.data[index].description}</p>
    </div>
  );
}

export default VideoGuide;
