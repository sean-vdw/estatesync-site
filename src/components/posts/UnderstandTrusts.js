import { useEffect } from "react";

export default function UnderstandTrusts() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Understanding Living Trusts in 25 Questions
            </span>
            <span className="block text-base text-center text-sky-600 font-semibold tracking-wide uppercase mt-6">
              From: EstatePlanning.com
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto text-left">
          <ol role="list">
            <li className="font-bold text-2xl">
              I have a will. Why would I want a living trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Contrary to what you've probably heard, a will may not be the best plan for you and your family. That's primarily because a will does not avoid probate when you die. A will must be validated by the probate court before it can be enforced.
              <br/><br/>Also, because a will can only go into effect after you die, it provides no protection if you become physically or mentally incapacitated. So the court could easily take control of your assets before you die—a concern of millions of older Americans and their families.
              <br/><br/>Fortunately, there is a simple and proven alternative to a will—the revocable living trust. It avoids probate and lets you keep control of your assets while you are living—even if you become incapacitated—and after you die.
              </span>
            </li>
            <li className="font-bold text-2xl">
              What is probrate?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Probate is the legal process through which the court sees that, when you die, your debts are paid and your assets are distributed according to your will. If you don't have a valid will, your assets are distributed according to state law.
              </span>
            </li>
            <li className="font-bold text-2xl">
              What's so bad about probate?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/><b>It can be expensive.</b> Legal fees, executor fees, and other costs must be paid before your assets can be fully distributed to your heirs. If you own property in other states, your family could face multiple probates, each one according to the laws in that state. These costs can vary widely; it would be a good idea to find out what they are now.
              <br/><br/><b>It takes time,</b> usually nine months to two years, but often longer. During part of this time, assets are usually frozen so an accurate inventory can be taken. Nothing can be distributed or sold without court and/or executor approval. If your family needs money to live on, they must request a living allowance, which may be denied.
              <br/><br/><b>Your family has no privacy.</b> Probate is a public process, so any “interested party” can see what you owned, whom you owed, who will receive your assets, and when they will receive them. The process “invites” disgruntled heirs to contest your will and can expose your family to unscrupulous solicitors.
              <br/><br/><b>Your family has no control.</b> The probate process determines how much it will cost, how long it will take, and what information is made public.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Doesn't joint ownership avoid probate?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Not really. Using joint ownership usually just postpones probate. With most jointly owned assets, when one owner dies, full ownership does transfer to the surviving owner without probate. But if that owner dies without adding a new joint owner, or if both owners die at the same time, the asset must be probated before it can go to the heirs.
              <br/><br/>Watch out for other problems. When you add a co-owner, you lose control. Your chances of being named in a lawsuit and of losing the asset to a creditor are increased. There could be gift and/or income tax problems. And since a will does not control most jointly owned assets, you could disinherit your family.
              <br/><br/>With some assets, especially real estate, all owners must sign to sell or refinance. So if a co-owner becomes incapacitated, you could find yourself with a new “co-owner”—the court—even if the incapacitated owner is your spouse.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Why would the court get involved at incapacity?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>If you can't conduct business due to mental or physical incapacity (dementia, stroke, heart attack, etc.), only a court appointee can sign for you—even if you have a will. (Remember, a will only goes into effect after you die.)
              <br/><br/>Once the court gets involved, it usually stays involved until you recover or die, and it, not your family, will control how your assets are used to care for you. This public probate process can be expensive, embarrassing, time consuming, and difficult to end. It does not replace probate at death, so your family may have to go through probate court twice!
              </span>
            </li>
            <li className="font-bold text-2xl">
              Does a Durable Power of Attorney prevent this?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>A durable power of attorney lets you name someone to manage your financial affairs if you are unable to do so. However, many financial institutions will not honor one unless it is on their form. And, if accepted, it may work too well, giving someone a “blank check” to do whatever he/she wants with your assets. It can be very effective when used with a living trust, but risky when used alone.
              </span>
            </li>
            <li className="font-bold text-2xl">
             What is a living trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>A living trust is a legal document that, just like a will, contains your instructions for what you want to happen to your assets when you die. But, unlike a will, a living trust can avoid probate at death, control all of your assets, and prevent the court from controlling your assets if you become incapacitated.
              </span>
            </li>
            <li className="font-bold text-2xl">
              How does a living trust avoid probate and prevent court control of assets at incapacity?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>When you set up a living trust, you transfer assets from your name to the name of your trust, which you control—such as from “Bob and Sue Smith, husband and wife” to “Bob and Sue Smith, trustees under trust dated (month/day/year).”
              <br/><br/>Legally you no longer own anything; everything now belongs to your trust. So there is nothing for the courts to control when you die or become incapacitated. The concept is simple, but this is what keeps you and your family out of the courts.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Do I lose control of the assets in my trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Absolutely not. You keep full control. As trustee of your trust, you can do anything you could do before—buy and sell assets, change, or even cancel your trust. That's why it's called a revocable living trust. You even file the same tax returns. Nothing changes but the names on the titles.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Is it hard to transfer assets into my trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>No, and your attorney, trust officer, financial adviser, and insurance agent can help. Typically, you will change titles on real estate, stocks, CDs, bank accounts, investments, insurance, and other assets with titles. Most living trusts also include jewelry, clothes, art, furniture, and other assets that do not have titles.
              <br/><br/>Some beneficiary designations (for example, insurance policies) should also be changed to your trust so the court can't control them if a beneficiary is incapacitated or no longer living when you die. (IRA, 401(k), etc. can be exceptions.)
              </span>
            </li>
            <li className="font-bold text-2xl">
              Doesn't this take a lot of time?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>It will take some time—but you can do it now, or you can pay the courts and attorneys to do it for you later. One of the benefits of a living trust is that all of your assets are brought together under one plan. Don't delay “funding” your trust; it can only protect assets that have been transferred into it.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Should I consider a corporate trustee?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>You may decide to be the trustee of your trust. However, some people select a corporate trustee (bank or trust company) to act as trustee or co-trustee now, especially if they don't have the time, ability, or desire to manage their trusts, or if one or both spouses are ill. Corporate trustees are experienced investment managers, they are objective and reliable, and their fees are usually very reasonable.
              </span>
            </li>
            <li className="font-bold text-2xl">
              If something happens to me, who has control?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>If you and your spouse are co-trustees, either can act and have instant control if one becomes incapacitated or dies. If something happens to both of you, or if you are the only trustee, the successor trustee you personally selected will step in. If a corporate trustee is already your trustee or co-trustee, they will continue to manage your trust for you.
              </span>
            </li>
            <li className="font-bold text-2xl">
              What does a successor trustee do?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>If you become incapacitated, your successor trustee looks after your care and manages your financial affairs for as long as needed, using your assets to pay your expenses. If you recover, you resume control. When you die, your successor trustee pays your debts, files your tax returns, and distributes your assets. All can be done quickly and privately, according to instructions in your trust, without court interference.
              </span>
            </li>
            <li className="font-bold text-2xl">
             Who can be successor trustees?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Successor trustees can be individuals (adult children, other relatives, or trusted friends) and/or a corporate trustee. If you choose an individual, you should also name some additional successors in case your first choice is unable to act.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Does my trust end when I die?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Unlike a will, a trust doesn't have to die with you. Assets can stay in your trust, managed by the trustee you selected, until your beneficiaries reach the age(s) you want them to inherit. Your trust can continue longer to provide for a loved one with special needs, or to protect the assets from beneficiaries' creditors, spouses, and future death taxes.
              </span>
            </li>
            <li className="font-bold text-2xl">
              How can a living trust save on estate taxes? 
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Your estate will have to pay federal estate taxes if its net value when you die is more than the “exempt” amount at that time. (Your state may also have its own death or inheritance tax.) If you are married, your living trust can include a provision that will let you and your spouse use both of your exemptions, saving a substantial amount of money for your loved ones.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Doesn't a trust in a will do the same thing?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Not quite. A will can contain wording to create a testamentary trust to save estate taxes, care for minors, etc. But because it's part of your will, this trust cannot go into effect until after you die and the will is probated. So it does not avoid probate and provides no protection at incapacity.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Is a living trust expensive?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Not when compared to all of the costs of court interference at incapacity and death. How much you pay will depend primarily on your goals and what you want to accomplish.
              </span>
            </li>
            <li className="font-bold text-2xl">
              How long does it take to get a living trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>It should only take a few weeks to prepare the legal documents after you make the basic decisions.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Should I have an attorney do my trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Yes, but you need the right attorney. A local attorney who has considerable experience in living trusts and estate planning will be able to give you valuable guidance and peace of mind that your trust is prepared and funded properly.
              </span>
            </li>
            <li className="font-bold text-2xl">
              If I have a living trust, do I still need a will?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Yes, you need a “pour-over” will that acts as a safety net if you forget to transfer an asset to your trust. When you die, the will “catches” the forgotten asset and sends it into your trust. The asset may have to go through probate first, but it can then be distributed as part of your overall living trust plan. Also, if you have minor children, a guardian will need to be named in the will.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Is a “living will” the same as a living trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>No. A living trust is for financial affairs. A living will is for medical affairs; it lets others know how you feel about life support in terminal situations.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Are living trusts new?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>No, they've been used successfully for hundreds of years.
              </span>
            </li>
            <li className="font-bold text-2xl">
              Who should have a living trust?
              <span className="text-base text-gray-500 font-normal">
              <br/><br/>Age, marital status, and wealth don't really matter. If you own titled assets and want your loved ones (spouse, children, or parents) to avoid court interference at your death or incapacity, you should probably have a living trust. You may also want to encourage other family members to have one so you won't have to deal with the courts at their incapacity or death.
              </span>
            </li>
          </ol>
          <h2 className="font-bold text-2xl">Summary of Living Trust Benefits</h2>
          <ul role="list">
            <li>Avoids probate at death, including multiple probates if you own property in other states</li>
            <li>Prevents court control of assets at incapacity</li>
            <li>Brings all of your assets together under one plan</li>
            <li>Provides maximum privacy</li>
            <li>Quicker distribution of assets to beneficiaries</li>
            <li>Assets can remain in trust until you want beneficiaries to inherit</li>
            <li>Can reduce or eliminate estate taxes</li>
            <li>Inexpensive, easy to set up and maintain</li>
            <li>Can be changed or cancelled at any time</li>
            <li>Difficult to contest</li>
            <li>Prevents court control of minors’ inheritances</li>
            <li>Can protect dependents with special needs</li>
            <li>Prevents unintentional disinheriting and other problems of joint ownership</li>
            <li>Professional management with corporate trustee</li>
            <li>Peace of mind</li>
          </ul>
          <p className="text-base">Source: 
            <a href="https://www.estateplanning.com/understanding-living-trusts/">EstatePlanning.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
