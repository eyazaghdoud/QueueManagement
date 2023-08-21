import classes from "./LoginHead.module.scss";

function LoginHead(props) {
  return (
    <div>
      <title className={classes.loginTitle}>{props.title}</title>
      <div>{props.desc}</div>
    </div>
  );
}

export default LoginHead;
