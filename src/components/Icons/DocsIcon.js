import Proptypes from "prop-types";

const DocsIcon = ({ css, size }) => {


  return (

      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 480 480"
        xmlSpace="preserve"
        height={size ?? "30px"}
        width={size ?? "30px"}
        className={`${css} dark:fill-[white]`}
      >
        <g>
          <g>
            <path d="M160,344h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S164.418,344,160,344z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M384,344H192c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S388.418,344,384,344z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M160,296h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S164.418,296,160,296z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M384,296H192c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S388.418,296,384,296z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M160,248h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S164.418,248,160,248z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M384,248H192c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S388.418,248,384,248z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M160,200h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S164.418,200,160,200z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M384,200H192c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S388.418,200,384,200z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M160,152h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S164.418,152,160,152z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M384,152H192c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S388.418,152,384,152z" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M439.896,119.496c-0.04-0.701-0.177-1.393-0.408-2.056c-0.088-0.256-0.152-0.504-0.264-0.752
			c-0.389-0.87-0.931-1.664-1.6-2.344l-112-112c-0.68-0.669-1.474-1.211-2.344-1.6c-0.248-0.112-0.496-0.176-0.744-0.264
			c-0.669-0.23-1.366-0.37-2.072-0.416C320.328,0.088,320.176,0,320,0H96c-4.418,0-8,3.582-8,8v24H48c-4.418,0-8,3.582-8,8v432
			c0,4.418,3.582,8,8,8h336c4.418,0,8-3.582,8-8v-40h40c4.418,0,8-3.582,8-8V120C440,119.824,439.912,119.672,439.896,119.496z
			 M328,27.312L412.688,112H328V27.312z M376,464H56V48h32v376c0,4.418,3.582,8,8,8h280V464z M424,416H104V16h208v104
			c0,4.418,3.582,8,8,8h104V416z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M192,72h-48c-4.418,0-8,3.582-8,8v48c0,4.418,3.582,8,8,8h48c4.418,0,8-3.582,8-8V80C200,75.582,196.418,72,192,72z
			 M184,120h-32V88h32V120z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
  );
};

DocsIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
};

export default DocsIcon;