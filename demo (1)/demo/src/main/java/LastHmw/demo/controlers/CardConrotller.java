package LastHmw.demo.controlers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LastHmw.demo.beans.Card;
import LastHmw.demo.bl.CardBL;

@RestController
@RequestMapping("card")
@CrossOrigin
public class CardConrotller {
	
	@Autowired
	CardBL cardBL;
	
	@GetMapping("getAllCards")
	public List<Card> getAllCards(){
		return cardBL.getAllCards();
	}
	
}
