import Button from 'react-bootstrap/Button';

function Footer({footerText}) {
  return (
    <>        
        <div className="buttonDiv">
            <Button variant="secondary" size="lg">Cargar más</Button>
        </div>
        <h4 className="footer"> {footerText} </h4>
        
    </>
  );
}

export default Footer;