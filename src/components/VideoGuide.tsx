import { Tutorial } from "../modules/Tutorial";

function VideoGuide(props: { data: Tutorial[] | undefined; ind: number }) {
  const index = props.ind - 1;

  //{props.data && props.data[index].video}

  return (
    <div className="video-guide-div">
      {props.data && props.data[index].video !== "" ? (
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

          {/*<script src="https://player.vimeo.com/api/player.js"></script>*/}

          {/*<iframe
            className="video-div"
            src="https://www.youtube.com/embed/o4k21iUeVuI?si=jQmFoa7D6Dz2v59L"
            allowFullScreen
          ></iframe>*/}
          <p className="text-bold">Upute:</p>
        </>
      ) : props.data && props.data[index].pros && props.data[index].cons ? (
        <>
          <table className="pros-cons-table pros-table">
            <thead>
              <tr>
                <th className="pros-th">Prednosti</th>
              </tr>
            </thead>
            <tbody>
              {props.data[index].pros.map((pro) => (
                <tr key={pro}>
                  <td>
                    <img
                      src="/images/pros.png"
                      className="pros-cons-img"
                      alt="pros icon"
                    />
                    <p className="pro-con-p">{pro}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="pros-cons-table cons-table">
            <thead>
              <tr>
                <th className="cons-th">Nedostaci</th>
              </tr>
            </thead>
            <tbody>
              {props.data[index].cons.map((con) => (
                <tr key={con}>
                  <td>
                    <img
                      src="/images/cons.png"
                      className="pros-cons-img"
                      alt="cons icon"
                    />
                    <p className="pro-con-p">{con}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {props.data && (
        <div
          className={`videoGuide-content-text ${
            index < 3 && "justContentText"
          }`}
        >
          {props.data &&
            props.data[index].description.map((desc) => (
              <p
                className="guide-p"
                key={desc}
                dangerouslySetInnerHTML={{ __html: desc }}
              ></p>
            ))}
        </div>
      )}
    </div>
  );
}

export default VideoGuide;
