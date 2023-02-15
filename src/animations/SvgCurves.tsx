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
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      viewBox={SVGViewBox}
    >
      <path
        d="M-209.228077,516.086119C1034.671801,120.987222,-275.392965,32.13723,770.012252,94.521267s534.990372,741.046737,1257.132854,597.37441q722.142482-143.672327,230.631891-45.370209"
        transform="translate(18.904257 116.278378)"
        fill="none"
        stroke-width="3.84"
        stroke={strokeColor}
        className={pathClassName}
      />
      <path
        d="M-118.48766,877.15736c1385.681778-20.794678-120.987223-103.973394,1128.583931-351.619114q1249.571154-247.64572,1209.872221-393.208472"
        transform="translate(28.35638 7.561701)"
        fill="none"
        stroke-width="3.84"
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

export { Curves1, Curves2, Curves3, Curves4, Triangle };
