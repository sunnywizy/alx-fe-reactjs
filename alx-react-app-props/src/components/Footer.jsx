function Footer() {
    return (
       <footer style={{ 
      backgroundColor: '#333', 
      color: '#aaa', 
      padding: '15px', 
      textAlign: 'center',
      borderTop: '1px solid #444',
      borderRadius: '0 0 8px 8px' // Rounded bottom corners
    }}>
            <p style={{ fontSize: '14px', margin: 0 }}>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;