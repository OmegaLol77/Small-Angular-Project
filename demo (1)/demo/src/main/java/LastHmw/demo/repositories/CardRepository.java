package LastHmw.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import LastHmw.demo.beans.Card;

public interface CardRepository extends JpaRepository<Card, Integer> {

}
