package exam;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@WebServlet("/getfileServlet")
public class GetfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetfileServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String id = request.getParameter("id");

		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		JSONArray ary = new JSONArray();
		MemberDAO dao = new MemberDAO();
		List<MemberVO> list = dao.getFileList();

		for (MemberVO vo : list) {
			JSONObject obj = new JSONObject();
			obj.put("id", vo.getId());
			obj.put("name", vo.getName());
			obj.put("password", vo.getPassword());
			obj.put("tel", vo.getTel());
			obj.put("gender", vo.getGender());
			
			ary.add(obj);
		}
		response.getWriter().print(ary);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
