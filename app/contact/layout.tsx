// Because this is a layout, you always have to imped the children because the 
// children are the pages or layouts because they can be either one, going into another
// layout because they are nested
export default function ContactLayout({ children }) {
  return <div>
    <div>contact layout</div>
    <div>{children}</div>
  </div>;
}
