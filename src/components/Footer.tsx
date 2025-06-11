import '../styles/_footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <a href="mailto:cannelle.brunch@gmail.com" className="footer__link">
                ✉️cannelle.brunch@gmail.com
                </a>
                <a href="tel:0630411462" className="footer__link">
                📞06&nbsp;30&nbsp;41&nbsp;14&nbsp;62
                </a>
                <p className='footer__copyright'>
                    © 2025 Cannelle.Brunch. Tous droits réservés.
                </p>
                
            </div>
        </footer>
    )
    }