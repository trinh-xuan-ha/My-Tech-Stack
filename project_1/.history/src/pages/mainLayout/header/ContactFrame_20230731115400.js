function ContactFrame(props) {
  const { icon, aText, classname } = props;
  return (
    <div className={classname}>
      {icon}
      <a href="#"> {aText} </a>
    </div>
  );
}
export default ContactFrame;
