import "../App.css";

const SVGViewBox = "-70 -100 2290 1080";
function Curves1({
  pathClassName,
  strokeColor,
}: {
  pathClassName: string;
  strokeColor: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox={SVGViewBox}
    >
      <path
        className={pathClassName}
        strokeMiterlimit="10"
        d="M-296.187643,563.346753C252.035708,285.454227,433.516541,470.71591,926.917556,270.330824Q1420.318571,69.945738,2289.91423,287.344652"
        transform="translate(.000001 0.000002)"
        stroke={strokeColor}
        strokeWidth="3.84"
        fill="none"
      />
      <path
        className={pathClassName}
        strokeMiterlimit="10"
        d="M-305.639769,875.266935c716.471206-444.249956,315.701032,20.794678,862.033957-58.603186s839.348854-542.552073,948.993524-474.496761-13.232978,693.7861,586.031857,576.579729q599.264835-117.206371,204.165937-73.726588"
        transform="translate(.000001 0.000001)"
        stroke={strokeColor}
        strokeWidth="3.84"
        fill="none"
      />
    </svg>
  );
}

function Curves2({
  pathClassName,
  strokeColor,
}: {
  pathClassName: string;
  strokeColor: string;
}) {
  return (
    <svg
      id="ezW4aMFHZqT1"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox={SVGViewBox}
    >
      <path
        className={pathClassName}
        d="M-341.557851,213.618064C686.833537,612.497812,794.587782,173.919132,1533.744092,497.181866s806.011511,164.140879,1113.689668,284.67459"
        transform="translate(.000001 0)"
        fill="none"
        stroke={strokeColor}
        strokeWidth="3.84"
      />
      <path
        className={pathClassName}
        d="M-305.642155,686.698263c1487.639747-107.845952-6.343879,57.094916,1122.866675,241.067422s-25.375519-926.206412,938.894168-735.890026q964.269687,190.316386,1049.91206,418.696049"
        transform="translate(.000002 0.000001)"
        fill="none"
        stroke={strokeColor}
        strokeWidth="3.84"
      />
    </svg>
  );
}

function Curves3({
  pathClassName,
  strokeColor,
}: {
  pathClassName: string;
  strokeColor: string;
}) {
  return (
    <svg
      id="eEB9DzqLptM1"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox={SVGViewBox}
    >
      <path
        d="M-173.309995,461.263784C785.135655,175.809557,998.753719,601.15526,1354.153684,323.262734s-117.206372,858.253107,431.016978,676.772274-7.561701-697.566953,361.071241-801.540347q368.632942-103.973394,111.535095-26.465956"
        transform="translate(-26.465953-63.423702)"
        fill="none"
        strokeWidth="3.84"
        stroke={strokeColor}
        className={pathClassName}
      />
      <path
        d="M-78.788728,145.446611C974.17819,500.962717,-473.887625,984.911605,745.436723,907.404166s680.553123-476.387185,1342.201994-446.140381q661.648871,30.246804,160.686154,11.342549"
        transform="translate(.000003 0.000003)"
        fill="none"
        strokeWidth="3.84"
        stroke={strokeColor}
        className={pathClassName}
      />
    </svg>
  );
}

function Curves4({
  pathClassName,
  strokeColor,
}: {
  pathClassName: string;
  strokeColor: string;
}) {
  return (
    <svg
      id="eMZm2deiWhv1"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox={SVGViewBox}
    >
      <path
        d="M-209.228077,516.086119C1034.671801,120.987222,-275.392965,32.13723,770.012252,94.521267s534.990372,741.046737,1257.132854,597.37441q722.142482-143.672327,230.631891-45.370209"
        transform="translate(18.904257 116.278378)"
        fill="none"
        strokeWidth="3.84"
        stroke={strokeColor}
        className={pathClassName}
      />
      <path
        d="M-118.48766,877.15736c1385.681778-20.794678-120.987223-103.973394,1128.583931-351.619114q1249.571154-247.64572,1209.872221-393.208472"
        transform="translate(28.35638 7.561701)"
        fill="none"
        strokeWidth="3.84"
        stroke={strokeColor}
        className={pathClassName}
      />
    </svg>
  );
}

function Triangle({ color }: { color: string }) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 25"
      preserveAspectRatio="none"
      fill={color}
      style={{
        top: 0,
        position: "absolute",
      }}
    >
      <path d="M1200 25L0 0 0 0 1200 0 1200 25z"></path>
    </svg>
  );
}

function GithubSVG({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="100%">
      <path
        fill={color}
        stroke={color}
        strokeWidth="0.1"
        d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z"
      />
    </svg>
  );
}
function StackOverflowSVG({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="100%">
      <path
        fill={color}
        stroke={color}
        strokeWidth="0.1"
        d="M 9.914063 0.71875 L 9.085938 1.28125 L 11.894531 5.367188 L 12.71875 4.800781 Z M 7.695313 2.453125 L 7.039063 3.207031 L 10.917969 6.582031 L 11.574219 5.828125 Z M 6.226563 4.804688 L 5.773438 5.695313 L 10.210938 7.953125 L 10.664063 7.0625 Z M 5.363281 7.140625 L 5.136719 8.109375 L 9.976563 9.242188 L 10.203125 8.265625 Z M 3 9 L 3 14 L 12 14 L 12 9 L 11 9 L 11 13 L 4 13 L 4 9 Z M 5.03125 9.25 L 4.96875 10.25 L 9.972656 10.566406 L 10.035156 9.570313 Z M 5 11 L 5 12 L 10 12 L 10 11 Z"
      />
    </svg>
  );
}
function LinkedInSVG({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="100%">
      <path
        fill={color}
        stroke={color}
        strokeWidth="0.1"
        d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"
      />
    </svg>
  );
}

export {
  Curves1,
  Curves2,
  Curves3,
  Curves4,
  Triangle,
  GithubSVG,
  LinkedInSVG,
  StackOverflowSVG,
};
