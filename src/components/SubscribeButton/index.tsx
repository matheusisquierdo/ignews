import styles from './styles.module.scss';

interface SubscribeButton {
  priceId: string;
}

export function SubscribeButton(props: SubscribeButton) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
