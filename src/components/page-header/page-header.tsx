import classNames from 'classnames';
import { PageSubtitle, PageSubtitleProps } from './page-subtitle/page-subtitle';
import { PageTitle, PageTitleProps } from './page-title/page-title';
import { StatusBadgeIconButton } from '../status-badge-icon-button/status-badge-icon-button';
import styles from './page-header.module.scss';
import { useNavigate } from 'react-router-dom';

interface PageHeaderSubcomponets {
    Title?: PageTitleProps;
    Subtitle?: PageSubtitleProps;
}

interface PageHeaderProps extends PageHeaderSubcomponets {
    className?: string;
    children: React.ReactNode;
}

const PageHeader = ({ className, children }: PageHeaderProps) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successful!');
        navigate('/');
    };
    return (
        <header className={classNames(styles.root, className)}>
            <div>
                <PageTitle>
                    <div />
                </PageTitle>
                <PageSubtitle>
                    <div />
                </PageSubtitle>
            </div>
            <div className={styles.utilities}>
                <div className={styles.actionsSection}>
                    <StatusBadgeIconButton
                        glyph="mail"
                        label="Messages"
                        onClick={() => alert('no messages to show')}
                    />
                    <StatusBadgeIconButton
                        glyph="notifications"
                        label="Notifications"
                        hasUpdates
                        onClick={() => alert('no notifications to show')}
                    />
                </div>
                <div className={styles.userSection}>
                    <div className={styles.avatar} />
                    <div className={styles.userDetails}>
                        <span>Fortune Regis</span>
                        <span className={styles.userAccountType}>Technical Staff</span>
                    </div>
                </div>
                <div>
                    <button className={styles['log-out']} onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </header>
    );
};

const Title = (props: PageTitleProps) => <PageTitle {...props} />;
PageHeader.Title = Title;

const Subtitle = (props: PageSubtitleProps) => <PageSubtitle {...props} />;
PageHeader.Subtitle = Subtitle;

export default PageHeader;
