import css from './VoteStats.module.css'
import type { Votes } from '../../types/votes';

interface VotStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}
export default function VoteStats({ votes, totalVotes, positiveRate }: VotStatsProps)  {

    return (
        <div className={css.container}>
        <p className={css.stat}>Good: <strong className={css.statstrong}>{votes.good}</strong></p>
  <p className={css.stat}>Neutral: <strong className={css.statstrong}>{votes.neutral}</strong></p>
  <p className={css.stat}>Bad: <strong className={css.statstrong}>{votes.bad}</strong></p>
  <p className={css.stat}>Total: <strong className={css.statstrong}>{totalVotes}</strong></p>
  <p className={css.stat}>Positive: <strong className={css.statstrong}>{positiveRate}%</strong></p>
    </div>
    )
   
 }